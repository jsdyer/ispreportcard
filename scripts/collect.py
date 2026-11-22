from common import ROOT,save,fetch
import network_extract as source,rpki_full,json,argparse,shutil

def main():
 p=argparse.ArgumentParser();p.add_argument('--seed',action='store_true');a=p.parse_args()
 if a.seed:d=json.loads((source.ROOT/'ispreportcard-full-fixture.json').read_text())
 else:
  shutil.rmtree(source.CACHE);source.CACHE.mkdir();(source.ROOT/'rpki-validator.json').write_bytes(fetch(rpki_full.SOURCE,limit=160_000_000));rpki_full.main();source.isp();d=json.loads((source.ROOT/'ispreportcard-full-fixture.json').read_text())
 rows=d['records']
 if len(rows)!=len(source.ISPS):raise ValueError('Incomplete provider set')
 for r in rows:
  r['id']='AS'+str(r['asn']);r['source_url']=r['ipv6']['source_url'];r['ipv6_rate']=r['ipv6']['rate'];r['ipv6_samples']=r['ipv6']['samples'];r['dnssec_rate']=r['dnssec']['rate'];r['dnssec_samples']=r['dnssec']['samples'];r['rpki_valid']=r['rpki']['valid_pct']
  if not r['rpki']['checked'] or r['rpki']['checked']!=r['rpki']['total_announced']:raise ValueError('Incomplete announced-prefix validation')
 save(rows,sources=[{'label':'APNIC Labs measurements and attribution','url':'https://labs.apnic.net/measurements/'},{'label':'RIPEstat announced prefixes','url':'https://stat.ripe.net/docs/data-api/api-endpoints/announced-prefixes'},{'label':'RIPE NCC RPKI validator export','url':rpki_full.SOURCE}],coverage='Seven named Canadian ASNs · 366 saved daily APNIC observations per indicator where available · full visible-prefix RPKI validation',warnings=['These are ASN-specific experiment and routing indicators, not whole-provider grades. DNSSEC can reflect public resolvers used by clients.'],extra={'attribution':d.get('attribution')})
if __name__=='__main__':main()
