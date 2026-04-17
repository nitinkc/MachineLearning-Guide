# 06 · Mathematical Reference { #math-reference }

> **A quick lookup for mathematical formulas and concepts used throughout this guide.**

---

## Linear Algebra

### Vectors and Matrices

**Dot Product:**
$$u \cdot v = \sum_{i=1}^{n} u_i v_i$$

**Matrix Multiplication:**
$$(AB)_{ij} = \sum_k A_{ik} B_{kj}$$

**Transpose:**
$$(A^T)_{ij} = A_{ji}$$

### Norms

**L1 Norm (Manhattan distance):**
$$||x||_1 = \sum_i |x_i|$$

**L2 Norm (Euclidean distance):**
$$||x||_2 = \sqrt{\sum_i x_i^2}$$

**Frobenius Norm (matrix):**
$$||A||_F = \sqrt{\sum_i \sum_j a_{ij}^2}$$

---

## Calculus

### Derivatives

**Power rule:** $\frac{d}{dx} x^n = n x^{n-1}$

**Product rule:** $\frac{d}{dx} [f(x) g(x)] = f'(x) g(x) + f(x) g'(x)$

**Chain rule:** $\frac{d}{dx} f(g(x)) = f'(g(x)) \cdot g'(x)$

### Common Derivatives

| Function | Derivative |
|:---------|:-----------|
| $\sin(x)$ | $\cos(x)$ |
| $\cos(x)$ | $-\sin(x)$ |
| $e^x$ | $e^x$ |
| $\ln(x)$ | $1/x$ |
| $\sigma(x) = \frac{1}{1+e^{-x}}$ | $\sigma(x)(1-\sigma(x))$ |

---

## Probability & Statistics

### Distributions

**Normal Distribution:**
$$P(X) = \frac{1}{\sigma \sqrt{2\pi}} e^{-\frac{(x-\mu)^2}{2\sigma^2}}$$

**Binomial Distribution:** Probability of $k$ successes in $n$ trials with probability $p$:
$$P(X=k) = \binom{n}{k} p^k (1-p)^{n-k}$$

### Information Theory

**Entropy:** Measure of uncertainty
$$H(X) = -\sum_i p_i \log p_i$$

**Cross-Entropy:** Difference between distributions
$$H(p, q) = -\sum_i p_i \log q_i$$

**KL Divergence:** Distance between distributions
$$D_{KL}(p || q) = \sum_i p_i \log \frac{p_i}{q_i}$$

---

## Machine Learning Formulas

### Loss Functions

**Mean Squared Error:**
$$L = \frac{1}{n} \sum_{i=1}^{n} (y_i - \hat{y}_i)^2$$

**Cross-Entropy (Binary):**
$$L = -\frac{1}{n} \sum_{i=1}^{n} [y_i \log(\hat{y}_i) + (1-y_i) \log(1-\hat{y}_i)]$$

**Cross-Entropy (Multi-class):**
$$L = -\frac{1}{n} \sum_{i=1}^{n} \sum_k y_{i,k} \log(\hat{y}_{i,k})$$

### Activation Functions

**ReLU:** $f(x) = \max(0, x)$

**Sigmoid:** $f(x) = \frac{1}{1 + e^{-x}}$

**Tanh:** $f(x) = \frac{e^x - e^{-x}}{e^x + e^{-x}}$

**Softmax:** $f(x_i) = \frac{e^{x_i}}{\sum_j e^{x_j}}$

### Optimization

**Gradient Descent Update:**
$$w_{t+1} = w_t - \alpha \nabla L(w_t)$$

**Momentum:**
$$v_t = \beta v_{t-1} + \nabla L(w_t)$$
$$w_{t+1} = w_t - \alpha v_t$$

**Adam:**
$$m_t = \beta_1 m_{t-1} + (1-\beta_1) \nabla L$$
$$v_t = \beta_2 v_{t-1} + (1-\beta_2) (\nabla L)^2$$
$$w_{t+1} = w_t - \alpha \frac{m_t}{\sqrt{v_t} + \epsilon}$$

### Evaluation Metrics

**Accuracy:**
$$\text{Accuracy} = \frac{TP + TN}{TP + TN + FP + FN}$$

**Precision:**
$$\text{Precision} = \frac{TP}{TP + FP}$$

**Recall:**
$$\text{Recall} = \frac{TP}{TP + FN}$$

**F1 Score:**
$$\text{F1} = 2 \cdot \frac{\text{Precision} \times \text{Recall}}{\text{Precision} + \text{Recall}}$$

**AUC-ROC:** Area under curve of True Positive Rate vs False Positive Rate

### Regularization

**L2 Penalty:**
$$L_{total} = L_{data} + \lambda \sum_i w_i^2$$

**L1 Penalty:**
$$L_{total} = L_{data} + \lambda \sum_i |w_i|$$

---

## Common Techniques Reference

### Normalization

**Min-Max:**
$$x_{norm} = \frac{x - x_{min}}{x_{max} - x_{min}}$$

**Z-Score:**
$$x_{norm} = \frac{x - \mu}{\sigma}$$

### Similarity Metrics

**Euclidean Distance:**
$$d(u, v) = \sqrt{\sum_i (u_i - v_i)^2}$$

**Cosine Similarity:**
$$\text{sim}(u, v) = \frac{u \cdot v}{||u|| \cdot ||v||}$$

**Manhattan Distance:**
$$d(u, v) = \sum_i |u_i - v_i|$$

---

## Matrix Decomposition

**Eigenvalue Decomposition:**
$$A = QΛQ^{-1}$$

**Singular Value Decomposition (SVD):**
$$A = UΣV^T$$

---

## Useful Approximations

**For small $x$:** $e^x \approx 1 + x$

**For small $p$:** $\log(1+p) \approx p$

**Stirling's approximation:** $n! \approx \sqrt{2\pi n} \left(\frac{n}{e}\right)^n$

---

--8<-- "_abbreviations.md"

