# 07 · Interview Q&A { #interview }

> **Common interview questions for ML/DL engineering roles.**

---

## Fundamentals

??? question "What's the difference between machine learning and deep learning?"
    Machine learning uses algorithms to learn patterns from data. Deep learning is a subset using neural networks with many layers. Deep learning excels at complex non-linear patterns; ML algorithms are simpler and more interpretable.

??? question "Explain overfitting and underfitting."
    **Overfitting:** Model learns training data too well, including noise. Training loss low, validation loss high. Fix: regularization, more data, simpler model. **Underfitting:** Model too simple to capture patterns. Both losses high. Fix: add capacity, features, or train longer.

??? question "What's the bias-variance trade-off?"
    Bias = error from wrong assumptions (underfitting). Variance = error from sensitivity to training data (overfitting). Total error = bias² + variance + irreducible. Simple models: high bias, low variance. Complex models: low bias, high variance. Goal: minimize both.

??? question "Why do we split data into train/val/test?"
    Training set: learn parameters. Validation set: tune hyperparameters and prevent overfitting. Test set: final unbiased evaluation. Without this split, validation metrics are overly optimistic.

---

## Optimization

??? question "Explain gradient descent."
    Algorithm to minimize loss by iteratively updating weights opposite to gradient. Direction: where loss increases fastest. Step size: learning rate. Update: w_new = w_old - lr * gradient. Converges to local (or global) minimum.

??? question "What's the difference between batch GD, SGD, and mini-batch GD?"
    **Batch GD:** Update after entire dataset, stable but slow. **SGD:** Update after 1 example, fast but noisy. **Mini-batch:** Update after small batch (most practical), balanced stability and speed.

??? question "What's the learning rate? How to choose it?"
    Learning rate controls step size per update. Too small: slow training. Too large: diverges. Start with 0.001, increase 10x until loss oscillates, then use smaller value. Use learning rate scheduling for better convergence.

??? question "What's the vanishing gradient problem?"
    In deep networks, gradients shrink exponentially backward through layers. Neurons stop learning because weight updates are tiny. Solutions: ReLU activation (constant gradient), batch normalization, skip connections, careful initialization.

??? question "Explain Adam optimizer."
    Combines momentum + adaptive learning rates. Maintains exponential average of gradients (momentum) and squared gradients (per-parameter learning rate). Works well for sparse gradients and most scenarios. Parameters with small gradients get larger updates; large gradients get smaller updates.

---

## Regularization

??? question "What's dropout? Why does it prevent overfitting?"
    Randomly deactivate neurons during training. Forces network to learn redundant representations. Acts like ensemble of models. During inference, use all neurons but scale by (1 - dropout rate) to account for dropped units.

??? question "Explain batch normalization."
    Normalize layer inputs to mean 0, std 1. Stabilizes training, allows higher learning rates, acts as regularizer. Reduces internal covariate shift. Almost always improves deep networks.

??? question "What's the difference between L1 and L2 regularization?"
    **L1:** Penalty = sum of absolute weights. Encourages sparsity (some weights = 0). **L2:** Penalty = sum of squared weights. Discourages large weights uniformly. L1 does feature selection; L2 does general regularization.

??? question "What's early stopping?"
    Monitor validation loss during training. Stop when it stops improving. Prevents overfitting in later training stages. Simple and effective without adding hyperparameters.

---

## Neural Networks

??? question "What's a neuron? What does it compute?"
    Unit that takes inputs, applies weights, adds bias, applies activation function. Output = activation(w·x + b). Learns weight and bias during training via backpropagation.

??? question "Why do we need activation functions?"
    Without them, stacking layers just composes linear functions (still linear). Activation functions introduce non-linearity, allowing networks to learn complex patterns.

??? question "Compare ReLU, Sigmoid, Tanh."
    **ReLU:** max(0, x), fast, avoids vanishing gradients, prone to dying ReLU. **Sigmoid:** 1/(1+e^-x), outputs 0–1 (good for binary output), suffers from vanishing gradients. **Tanh:** Similar to sigmoid but outputs -1–1, stronger gradients than sigmoid.

??? question "What's backpropagation?"
    Algorithm computing gradients via chain rule from output to input. Forward pass: compute loss. Backward pass: propagate error, compute gradients for each weight. Enables efficient training of deep networks.

??? question "How many layers should my network have?"
    Start with 3–4. Add more if underfitting (training loss high). Use regularization if overfitting (validation loss high). Deep networks are powerful but require more data and computation. Very deep (50+) networks need careful tuning.

---

## Deep Learning Architectures

??? question "Why use CNNs for images instead of fully-connected networks?"
    CNNs exploit spatial structure. Use convolutions (local connectivity + weight sharing) instead of fully-connected. Fewer parameters, translation invariance, faster training. Hierarchical feature learning.

??? question "What are the main components of a CNN?"
    **Convolution:** Detect patterns. **Pooling:** Downsample. **Activation:** ReLU. **Flatten:** Convert to vector. **Dense:** Classification. Arranged in sequence: conv → pool → conv → pool → flatten → dense.

??? question "When would you use RNN vs Transformer?"
    **RNN:** Sequential processing, maintains hidden state, good for small sequences. **Transformer:** Parallel processing, self-attention, handles long sequences, modern standard. For most new projects: use Transformer.

??? question "What's self-attention in Transformers?"
    Each token computes similarity to all other tokens via query-key dot product. Weighted average of values gives output. Captures long-range dependencies, parallelizable, modern foundation for LLMs.

---

## Evaluation & Metrics

??? question "When should I use accuracy vs F1 vs AUC?"
    **Accuracy:** Balanced classes, equal cost of errors. **F1:** Imbalanced data, want both precision and recall. **AUC:** Threshold-independent metric, summarizes performance across thresholds.

??? question "Explain precision and recall."
    **Precision:** Of predicted positives, how many were right? (FP cost). **Recall:** Of actual positives, how many did we find? (FN cost). Choose based on which error is more costly.

??? question "What's the confusion matrix?"
    4×4 (or 2×2 for binary) table: rows=actual, cols=predicted. Cells: TP, FP, FN, TN. Used to compute precision, recall, F1, specificity.

??? question "How do you evaluate on imbalanced data?"
    Don't use accuracy (misleading). Use F1, precision-recall curve, AUC-ROC, or stratified k-fold. Consider oversampling minority, undersampling majority, or class weights.

---

## Transfer Learning

??? question "Why is transfer learning powerful?"
    Pre-training on large dataset learns general features. Fine-tuning on task-specific data adapts efficiently. Reduces data requirements, training time, computation. Especially powerful for domains with limited labeled data.

??? question "Pre-training vs fine-tuning: what's the difference?"
    **Pre-training:** Learn on large unlabeled/labeled dataset (e.g., ImageNet, Wikipedia). **Fine-tuning:** Adapt pre-trained model to specific task with smaller labeled dataset. Pre-trained weights provide good initialization.

??? question "Should fine-tuning learning rate be different from training from scratch?"
    Yes! Use 1–10x smaller learning rate. Pre-trained weights are already useful; you want small adjustments. Large learning rate erases pre-trained knowledge.

---

## Practical Advice

??? question "I have high training loss. What should I do?"
    Model is underfitting. Options: add layers/neurons, add features, train longer, reduce regularization, increase learning rate, check for bugs.

??? question "I have low training loss but high validation loss. What should I do?"
    Model is overfitting. Options: add regularization (L2, dropout), use early stopping, get more data, use simpler model, reduce learning rate.

??? question "My model training is slow. How do I speed it up?"
    Use GPU, reduce batch size (memory not bottleneck), reduce model size, use mixed precision, profile code for bottlenecks, simplify model.

??? question "How do I handle imbalanced classes?"
    **Techniques:** Oversampling (duplicate minority), undersampling (remove majority), class weights, different metrics (F1, AUC). **Choice:** Depends on data size and problem.

??? question "What's a good first model to try?"
    **Linear model** (baseline), **Random Forest** (robust, handles interactions), **LightGBM/XGBoost** (state-of-the-art for tabular), **Neural network** (for images/text). Start simple, increase complexity.

---

--8<-- "_abbreviations.md"

