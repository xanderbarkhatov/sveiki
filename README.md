# Greeting API

This API allows you to get an equivalent of "Hello" in different languages

## Features
- 183 languages
- Defaults to "Hello"
- ISO 639-1 language codes 
- Detect a language based on `accept-language` header
- Should be quite fast, thanks to Vercel's Edge Network and caching

## Getting Started
To get a greeting, make a GET request to the [https://sveiki.vercel.app/api/hello](https://sveiki.vercel.app/api/hello) endpoint with the desired language code

Example:

```bash
curl https://sveiki.vercel.app/api/hello?code=lt
```
This will return a greeting in Lithuanian:
```json
{
  "greeting": "Sveiki",
  "language": "Lithuanian",
  "code": "lt"
}
```
If `code` is omitted, `accept-language` header will be used instead

Will default to "Hello" if greeting is not found

## Available Languages
Refer to the [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes for a full list of supported languages.