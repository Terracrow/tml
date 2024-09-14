```typescript
function TMLRm(key: string, options: { path: string }): void {

    try {

        const file = unlinkSync(`${options.path}/${key}.yml`);
    } catch(e) {
        throw handleError(e);
    }
}
```
