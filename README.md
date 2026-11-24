# ISP Report Card

Compare measured internet capabilities, one indicator at a time. See the dates, samples and routing evidence behind each number.

Open https://coolcode.ca/ispreportcard/

<!-- coolcode:guide -->
Compare IPv6 capability, DNSSEC validation and RPKI route authorization separately. Open a provider for dated histories, experiment counts and prefix evidence. There is no composite grade.
<!-- /coolcode:guide -->

## Sources and interpretation

APNIC’s IPv6 and DNSSEC indicators come from ad-based experiments. Samples are experiments, not subscribers or unique people. Rates pool raw positive and total counts over a selected calendar window instead of averaging daily percentages.

DNSSEC measures the resolvers used by sampled clients, including public resolvers; it does not isolate the ISP’s own DNS infrastructure. Each indicator has its own latest measurement date and sample size.

RPKI compares currently visible RIPE RIS origin prefixes against a dated RIPE validator ROA export. Valid, invalid and not-found outcomes are distinct. Coverage of ROAs is not a measurement of an ISP’s route-filtering performance.

ASNs are technical boundaries, not whole corporate brands. Regional subsidiaries and mobile networks may use other ASNs. No unexplained overall grade is calculated.

## Collection and archive

Schedule: **Weekly** (`19 11 * * 4`, UTC). GitHub schedules are best effort. Scheduled and manual runs collect, validate, commit dated snapshots and deploy. A first code push also collects if no saved dataset exists. Other code pushes rebuild the saved dataset offline.

`data/current.json` contains the latest normalized source records and metadata. `archive/YYYY-MM/*.json.gz` retains distinct captured versions; `data/history.json` lists them. Identical data checks update the check time without manufacturing a change. An initial capture is labelled baseline. Archive data is tracked in Git and does not expire with Actions artifacts. The site has snapshot selection, filtering, source detail, CSV export and an RSS change feed.

The default build needs no network. Failed source validation does not replace the published dataset. Optional `HEALTHCHECKS_PING_URL` sends start/success/failure pings for collection runs; no accuracy email is implied.

```sh
python3 -m pip install -r requirements.txt
python3 scripts/collect.py
node --test tests/*.test.mjs
python3 -m unittest discover -s tests -v
python3 scripts/build.py
```

## Privacy

Search and filters are local to the browser; no upstream request is made by filtering. Public data collection runs in GitHub Actions. The shared CoolCode counter records aggregate page opens, without searches or filter values. The explorer and collector run without Cloudflare changes. To enable shared visit counts and private issue reports, add `ispreportcard` to the existing `coolcode-visitor-api` Worker’s `toolList` and deploy it, if not already registered. See the [batch setup notes](https://github.com/jsdyer/jsdyer.github.io/blob/main/docs/tier1-tools.md).

## Software and attribution

Application code is MIT licensed; upstream data retains its original licence and attribution. Follow the source links for original records and terms.

<!-- schedule-reliability -->
## Schedule reliability

Public GitHub repositories can have scheduled workflows disabled after 60 days of inactivity. A separate weekly [schedule guard](.github/workflows/schedule-guard.yml) calls GitHub's enable-workflow API for an explicit list of refresh workflows and itself. It can restore workflows disabled for inactivity, preserves manually disabled workflows, and runs independently of collection failures.

This is an interim mitigation, not a scheduling guarantee: GitHub does not document active-workflow renewal as a permanent exemption, and scheduled runs can be delayed or dropped. A scheduler on our own Linux server is the planned independent trigger. The guard does not collect data, create dummy commits, or change source/check timestamps; successful collection and published data freshness still need monitoring.
<!-- /schedule-reliability -->
