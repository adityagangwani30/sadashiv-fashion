# Security Boundaries

> TokenCap Constitution Engine

## 🔴 CONST-SEC-E58E40 — CRITICAL

**Encryption implementation must remain algorithm-compatible.**

> **Why:** Changing the encryption algorithm or key derivation method makes all existing encrypted data unreadable.

> **What breaks:** Encrypted data (tokens, at-rest fields, backups) cannot be decrypted.

*Files:* `sadashiv-web/data/products.ts`
