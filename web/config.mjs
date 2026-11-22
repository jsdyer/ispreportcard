export default {
  "title": "ISP Report Card",
  "intro": "Compare measured internet capabilities, one indicator at a time. See the dates, samples and routing evidence behind each number.",
  "eyebrow": "CANADIAN NETWORKS / MEASURED INDICATORS",
  "accent": "#495bb4",
  "tint": "#e9ecfb",
  "method": [
    "APNIC’s IPv6 and DNSSEC indicators come from ad-based experiments. Samples are experiments, not subscribers or unique people. Rates pool raw positive and total counts over a selected calendar window instead of averaging daily percentages.",
    "DNSSEC measures the resolvers used by sampled clients, including public resolvers; it does not isolate the ISP’s own DNS infrastructure. Each indicator has its own latest measurement date and sample size.",
    "RPKI compares currently visible RIPE RIS origin prefixes against a dated RIPE validator ROA export. Valid, invalid and not-found outcomes are distinct. Coverage of ROAs is not a measurement of an ISP’s route-filtering performance.",
    "ASNs are technical boundaries, not whole corporate brands. Regional subsidiaries and mobile networks may use other ASNs. No unexplained overall grade is calculated."
  ],
  "id": "ispreportcard",
  "explorer-title": "Follow the record.",
  "cadence": "Weekly automated collection. Source dates and capture dates are shown separately.",
  "facets": [
    {
      "key": "provider",
      "label": "Provider"
    }
  ],
  "columns": [
    {
      "key": "provider",
      "label": "Provider / ASN"
    },
    {
      "key": "asn",
      "label": "ASN"
    },
    {
      "key": "ipv6_rate",
      "label": "IPv6 capable (%)"
    },
    {
      "key": "ipv6_samples",
      "label": "IPv6 experiments"
    },
    {
      "key": "dnssec_rate",
      "label": "DNSSEC validating (%)"
    },
    {
      "key": "dnssec_samples",
      "label": "DNSSEC experiments"
    },
    {
      "key": "rpki_valid",
      "label": "RPKI valid (%)"
    }
  ],
  "related": [
    {
      "label": "ASN Canada",
      "url": "https://coolcode.ca/asn-canada/"
    },
    {
      "label": "RPKI Guard",
      "url": "https://coolcode.ca/rpkiguard/"
    },
    {
      "label": "Telecom Pulse",
      "url": "https://coolcode.ca/telecompulse/"
    }
  ],
  "controls": [
    {
      "key": "days",
      "label": "APNIC pooling window",
      "options": [
        {
          "value": "7",
          "label": "7 calendar days"
        },
        {
          "value": "30",
          "label": "30 calendar days"
        },
        {
          "value": "90",
          "label": "90 calendar days"
        }
      ],
      "default": "30"
    }
  ]
};
