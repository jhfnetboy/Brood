---
id: decision-2
title: Choose OP Mainnet for CCIP-Read Resolver / 选择 OP 主网进行 CCIP-Read 解析
date: '2026-02-28 12:05'
status: accepted
---
## Context / 背景
**EN:** We need to provide ENS resolution on Layer 2 to minimize gas costs while maintaining compatibility with the Ethereum L1 ENS system.
**CN:** 我们需要在 Layer 2 上提供 ENS 解析，以最大限度地降低 Gas 成本，同时保持与以太坊 L1 ENS 系统的兼容性。

## Decision / 决策
**EN:** We decided to deploy the ENS resolver on **OP Mainnet** and use **CCIP-Read** (ERC-3668) for cross-chain resolution.
**CN:** 我们决定在 **OP Mainnet** 上部署 ENS 解析器，并使用 **CCIP-Read** (ERC-3668) 进行跨链解析跳转。

## Consequences / 影响
**EN:**
- **Positive**: Near-zero resolution cost for users; full compatibility with L1 wallets.
- **Negative**: Requires infrastructure for CCIP-Read gateway services.
**CN:**
- **积极影响**：用户几乎零成本解析；完全兼容 L1 钱包。
- **挑战**：需要维护一套 CCIP-Read 网关服务基础设施。

---
**Snapshot Vote:** [TBD / 待启动]
