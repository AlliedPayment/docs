# Authorization Header

## API Keys

- Get API keys from Allied
  - Public key
  - Private key

## HTTP Authorization Header

- Implement HTTP Authorization header

```cs
// C# implementation

        private void SetAuthorizationHeader(string url, string domain = null, string username = null)
    {
        var header = GetAuthorizationHeader(url, domain, username);
        this.DefaultRequestHeaders.Remove("Authorization");
        this.DefaultRequestHeaders.Add("Authorization", header);
    }

    private string GetAuthorizationHeader(string url, string domain = null, string username = null)
    {
        var timestamp = DateTime.UtcNow.ToString("o");
        var signature = CreateSignature(url, timestamp);
        var publicKey = _config.Value.PublicKey;

        var header = new StringBuilder("TIMESTAMP ");
        if (!string.IsNullOrEmpty(username)) header.Append($"username={username};");
        if (!string.IsNullOrEmpty(domain)) header.Append($"domain={domain};");
        header.Append($"timestamp={timestamp};signature={signature};publickey={publicKey}");
        return header.ToString();
    }

    private string CreateSignature(string url, string timestamp)
    {
        var message = new StringBuilder();
        message.Append(url + "\r\n");
        if (!string.IsNullOrEmpty(timestamp)) message.Append(timestamp + "\r\n");
        var bytes = Encoding.UTF8.GetBytes(message.ToString());
        var key = Encoding.UTF8.GetBytes(_config.Value.PrivateKey);
        var hmac = new HMACSHA1(key);
        var hash = hmac.ComputeHash(bytes);
        return Convert.ToBase64String(hash);
    }

```

- Signature verification
  - [Signature Tool][SignatureTool]
    - Online tool can be used to verify that the signature that your signature is correct by comparing it with the results from our signature tool.

[SignatureTool]: https://alliedpayment.github.io/Utilities/
