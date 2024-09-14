```typescript
function TMLSet(key: string, value: any, options: { path: string }): void {

    try {
        const file = writeFileSync(`${options.path}/${key}.yml`, yaml.stringify({
            __tmlversion: 'beta-1.0',
            body: value
        }));
    } catch (e) {
        throw handleError(`Unable to set key [${key}] in ${options.path}`);
    }
}
```
