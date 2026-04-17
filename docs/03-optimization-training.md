# 03 · Optimization & Training { #optimization-training }

> **Level:** Intermediate  
> **Pre-reading:** [00.02 · Core Concepts](00.02-core-concepts.md)

---

## Training Deep Networks: Practical Strategies

Training deep networks requires careful attention to hyperparameters and techniques:

---

## Learning Rate Scheduling

Instead of using constant learning rate, **decay it over time**:

| Strategy | How It Works |
|:---------|:------------|
| **Step decay** | Divide by 2 every N epochs |
| **Exponential decay** | Multiply by 0.9 each epoch |
| **Cosine annealing** | Follow cosine curve from high to low |
| **Warm-up** | Start low, increase to max, then decay |

Benefits:
- Allows larger initial steps (faster progress)
- Smaller final steps (fine-grained convergence)
- Often improves final model quality

---

## Batch Size Effects

Batch size affects both training and generalization:

- **Small batches:** Noisier gradients, often better generalization, slower per-epoch
- **Large batches:** Smoother gradients, sometimes worse generalization, faster per-epoch

Sweet spot: 32–256 for most problems.

---

## Weight Initialization

How you initialize weights matters:

| Method | Formula | When to Use |
|:-------|:--------|:-----------|
| **Xavier/Glorot** | Uniform in [-√(6/(n+m)), +√(6/(n+m))] | Dense layers with tanh |
| **He** | Normal with std = √(2/n) | Dense layers with ReLU |
| **Zero** | All weights = 0 | Only for bias |
| **Random normal** | N(0, 0.01) | Careful — can be too small |

Poor initialization can cause training to stall or fail.

---

### Interview Q&A

??? question "What happens if learning rate is too high?"
    Loss oscillates or increases. Weights diverge instead of converging. Reduce learning rate.

??? question "What's the effect of large batch size?"
    Smoother gradient estimates, faster training (more samples per second), but sometimes worse generalization and may need smaller learning rate.

??? question "Should I warm up the learning rate?"
    Yes, for most modern training. Start at 0, linearly increase to target, then decay. Prevents instability in early training.

---

--8<-- "_abbreviations.md"

