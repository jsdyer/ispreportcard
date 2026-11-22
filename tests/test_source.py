import sys,unittest
from pathlib import Path
sys.path.insert(0,str(Path(__file__).resolve().parents[1]/'scripts'))
import ipaddress
from rpki_full import ancestors
class SourceTests(unittest.TestCase):
 def test_ancestor_index_separates_address_families_and_prefix_lengths(self):
  v4=list(ancestors(ipaddress.ip_network('10.0.0.0/24')));v6=list(ancestors(ipaddress.ip_network('2001:db8::/32')));self.assertEqual(len(v4),25);self.assertEqual(v4[0],(4,0,0));self.assertEqual(v6[0],(6,0,0))
