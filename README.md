# Linktree

## 1. Preview

![preview](./images/preview.png)

## 2. Frameworks

- [x] Next.js 13
- [ ] Turbopack
- [x] Prettier
- [x] Nextauth.js
- [x] Typescript
- [x] Tailwindcss
- [x] Mongodb Altas

## 3. Features

- [x] Darkmode
- [x] Login
- [x] Edit/Add/Delete
- [x] ScrollToTop
- [x] Popup animation

## 4. Bugs

- [ ] Cannot use bcrypt for hash and compare password
- [ ] Cannot Put Popup component in root directory component
- [ ] Cannot use turbopack, turbo has a lot of bugs needed to fix
- [ ] Loading component is appropriate, only root loading file is usable

## 5. Development

Install packages:

```bash
npm install
```

Run dev:

```bash
npm run dev
```

## 6. Deploy

Add `.env` file:

```env
NEXTAUTH_SECRET="8GYrPDgw9wj5213UHWIm"
NEXTAUTH_URL="https://your.domain.com/"
MONGODB_URI="mongodb://username:password@mongodb0.example.com:27017/"
```

Install packages:

```bash
npm run build
```

Run start:

```bash
npm run start
```
