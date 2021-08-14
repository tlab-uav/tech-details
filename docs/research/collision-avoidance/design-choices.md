---
hide_title: true
sidebar_label: Design Choices
---
## Design Choices

### Trajectory Representation & Associated Controls
- Velocity vector **[In Current CA​]**
- Way point & max speed **[Propose for new implementation]**
- Full **acceleration**, **velocity**, **position** trajectory using :​
    - Set of piece-wise polynomials [UPenn]​
    - Boundary State Constraint Primitive [Tlab MPC]
    - B-spline [HKUST]
    - Reflexxes [Tlab previous autonomy solution]​

### Whether to implement rules
- Yes **[Propose for new implementation]** **[In Current CA​]**​
- No​

### What information to use from neighbouring UAVs​
- Sensed state **[In Current CA​]**
- Intent **[Propose for new implementation]**

### Search for solution​
- Gradient descent **[Propose for new implementation]**
- Brute-force search **[In Current CA​]**
- Linear Programming, Sequential Quadratic Programming, …​

### Application of solution​
- Full solution **[In Current CA​]**
- Half solution (like in RVO) **[Propose for new implementation]**