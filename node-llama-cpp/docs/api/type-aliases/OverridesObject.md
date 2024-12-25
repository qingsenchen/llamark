# Type Alias: OverridesObject&lt;T, AllowedValueTypes&gt;

```ts
type OverridesObject<T, AllowedValueTypes>: T extends object ? { [P in keyof T]?: OverridesObject<T[P], AllowedValueTypes> } : T extends infer I[] ? AllowedValueTypes extends any[] ? OverridesObject<I, AllowedValueTypes>[] : never : T extends ReadonlyArray<infer I> ? AllowedValueTypes extends ReadonlyArray<any> ? ReadonlyArray<OverridesObject<I, AllowedValueTypes>> : never : AllowedValueTypes extends T ? T : never;
```

Makes all the properties of an object optional, including nested objects,
and strips all keys that their value is not of the specified allowed value types.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
| `AllowedValueTypes` |

## Defined in

[utils/OverridesObject.ts:5](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/utils/OverridesObject.ts#L5)
