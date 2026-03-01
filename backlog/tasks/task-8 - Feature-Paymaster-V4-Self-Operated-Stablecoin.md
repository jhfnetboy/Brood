---
id: TASK-8
title: '[Feature] Paymaster V4 - Self-Operated & Stablecoin'
status: In Progress
assignee: []
created_date: '2026-02-28 11:15'
updated_date: '2026-03-01 04:26'
labels:
  - feature
  - paymaster
  - backend
milestone: 'Phase 1: Genesis Launch'
dependencies:
  - TASK-6
priority: medium
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Implement Paymaster V4 (Pre-paid) and SuperPaymaster (Credit-based) in a unified project.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Implement Paymaster V4 with pre-paid model,Implement SuperPaymaster with credit/reputation mapping,Support repayment logic for SuperPaymaster,Integrate Chainlink Oracle for gas price
- [ ] #2 Add interface to add and remove token address
- [ ] #3 pre-config USDC, USDC for multichain?(if they are the same addr crosschain)
- [ ] #4 Test USDC, USDT deposit and gasless tx
<!-- AC:END -->
