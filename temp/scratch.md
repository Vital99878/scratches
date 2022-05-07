ca="-----BEGIN CERTIFICATE-----\nXXXX\nXXXX\n-----END CERTIFICATE-----"
ca[]="..."
ca[]="..."

"start-w": "set NODE_TLS_REJECT_UNAUTHORIZED=\"0\" && set NODE_EXTRA_CA_CERTS=\"E:\\Brand\\external-site\\certs\\ROOTCA-2019.pem\" && set NODE_OPTIONS=--use-openssl-ca && next dev",
