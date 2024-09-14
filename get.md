```typescript
function TMLGetKey(key: string, options: { path: string }) {

    try {
        const file = readFileSync(`${options.path}/${key}.yml`, { encoding: 'utf8' });
        const data = yaml.parseDocument(file);
        const JSONData = JSON.stringify(data);

        return JSON.parse(JSONData);
    } catch (e) {
        throw handleError(e);
    }
}
```
