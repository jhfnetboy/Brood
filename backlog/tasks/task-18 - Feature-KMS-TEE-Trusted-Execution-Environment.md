---
id: TASK-18
title: '[Feature] KMS/TEE - Trusted Execution Environment'
status: In Progress
assignee:
  - jhfntboy
created_date: '2026-02-28 10:16'
updated_date: '2026-03-01 04:13'
labels:
  - feature
  - security
  - sign90
  - phase-2
milestone: 'Phase 2: Community Expansion'
dependencies:
  - TASK-7
priority: high
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Integrate KMS/TEE for secure key management and execution within Sign90.
- STM32MP157F-DK2, power and connect to Mac mini
- Config network and rebuild STLinux distribution version
- Deploy and publish to Internet and test
- Refine or add some APIs
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Select TEE provider,Implement KMS interface,Verify secure execution
<!-- AC:END -->

## Implementation Plan

<!-- SECTION:PLAN:BEGIN -->
Check https://github.com/jhfnetboy/STM32MP157F-DK2
Working on branch KMS-imigration in AirAccount
<!-- SECTION:PLAN:END -->

## Definition of Done
<!-- DOD:BEGIN -->
- [ ] #1 KMS.aastar.io is running with permanant storage for private key
<!-- DOD:END -->
