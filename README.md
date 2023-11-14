# Sveiki 👋

Get an equivalent of "Hello" in different languages

Why? Who knows 🤷‍♂️

## Features
- 🌍 183 languages
- 📒 ISO 639-1 language codes 
- 🔎 Can detect a language from `accept-language` header

## Getting Started
Make a GET request to the [sveiki.vercel.app/api/hello](https://sveiki.vercel.app/api/hello) endpoint with the desired language code

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
Refer to the [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes for a full list of supported languages

Or just look at the [greetings.json](https://github.com/xanderbarkhatov/sveiki/blob/main/src/routes/api/hello/greetings.json) file 😅
