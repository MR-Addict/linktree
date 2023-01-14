# Linktree

## 1. Preview

![preview](./images/preview.png)

## 2. Frameworks

- [x] Prettier
- [x] Next.js 13
- [ ] Turbopack
- [x] Typescript
- [x] Nextauth.js
- [x] Tailwindcss
- [x] Mongodb Altas

## 3. Features

- [x] Login
- [x] Darkmode
- [x] ScrollToTop
- [x] Edit/Add/Delete
- [x] Popup animation

## 4. Bugs

- [ ] Cannot use bcrypt for hash and compare password
- [ ] Cannot put Popup component in root component folder, strange bug
- [ ] Cannot use turbopack, turbopack really got a lot of bugs needed to fix
- [ ] Cannot loading other route loading component, only root loading is usable

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
