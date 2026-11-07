# Compliance Rules

> TokenCap Constitution Engine

## 🔴 CONST-COMP-1A246E — CRITICAL

**Payment processing (PCI-DSS) — all Stripe/payment code requires compliance review.**

> **Why:** PCI-DSS requires that all payment card data handling meets security standards. Any change to payment flows must be reviewed.

> **What breaks:** PCI compliance violation. Payment processor account suspension. Legal liability.

*Files:* `sadashiv-web/data/products.ts`
