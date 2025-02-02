This is the js cli of qjs/qjsc. See https://github.com/quickjs-ng/quickjs for
details.

## usage

```bash
pnpm dlx @easy-install/qjs -e "console.log('hello qjs')"
pnpm dlx @easy-install/qjsc

pnpm i @easy-install/qjs -g
qjs -e "console.log('hello qjs')"

pnpm i @easy-install/qjsc -g
qjsc
```

## Q&A

### ubuntu

qjsc requires libc.musl

```bash
sudo apt install musl-dev -y
sudo ln -s /usr/lib/x86_64-linux-musl/libc.so /lib/libc.musl-x86_64.so.1
```
