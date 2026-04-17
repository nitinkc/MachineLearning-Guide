<!-- Machine Learning Core Concepts -->
*[ML]: Machine Learning — computational approach where systems learn patterns from data rather than being explicitly programmed.
*[DL]: Deep Learning — machine learning using neural networks with multiple layers to learn hierarchical representations.
*[Supervised Learning]: Learning from labeled examples where inputs map to known outputs.
*[Unsupervised Learning]: Learning patterns in unlabeled data without predefined outputs.
*[Reinforcement Learning]: Learning through trial-and-error with rewards and penalties.
*[Self-Supervised Learning]: Learning by predicting parts of data from other parts without external labels.

<!-- Neural Network Concepts -->
*[Neuron]: A computational unit that takes inputs, applies weights, adds bias, and applies an activation function.
*[Weight]: Learnable parameter that scales each input in a neural network.
*[Bias]: Learnable offset added to the weighted sum before activation in a neuron.
*[Activation Function]: Non-linear function applied to neuron outputs to introduce expressiveness.
*[ReLU]: Rectified Linear Unit — activation function that outputs max(0, x), the most common in modern networks.
*[Sigmoid]: Activation function outputting values between 0 and 1, used for binary classification outputs.
*[Tanh]: Hyperbolic tangent activation, outputs between -1 and 1, smoother than sigmoid.
*[Softmax]: Activation that converts logits to a probability distribution over classes.

<!-- Training Concepts -->
*[Backpropagation]: Algorithm to compute gradients of loss with respect to all weights using the chain rule, enabling training.
*[Gradient Descent]: Optimization algorithm that iteratively updates weights by moving in the direction of negative gradient.
*[Stochastic Gradient Descent]: Gradient descent using mini-batches of data instead of full dataset.
*[Momentum]: Optimization technique that accumulates gradient direction over steps, accelerating convergence.
*[Adam]: Adaptive moment estimation — modern optimization algorithm combining momentum and RMSprop.
*[Learning Rate]: Step size controlling how much weights change per gradient update.
*[Epoch]: One complete pass through the entire training dataset.
*[Batch]: Subset of training data processed together before updating weights.
*[Loss Function]: Function measuring prediction error, minimized during training.
*[Cross-Entropy Loss]: Loss for classification, measures difference between predicted and actual probability distributions.
*[MSE]: Mean Squared Error — loss function for regression tasks, average of squared prediction errors.

<!-- Regularization & Generalization -->
*[Overfitting]: When a model learns training data too well, memorizing noise instead of generalizing.
*[Underfitting]: When a model is too simple to capture underlying patterns in data.
*[Regularization]: Techniques to prevent overfitting by adding constraints to the learning process.
*[L1 Regularization]: Adds penalty proportional to absolute values of weights, encourages sparsity.
*[L2 Regularization]: Adds penalty proportional to squared values of weights, discourages large weights.
*[Dropout]: Randomly deactivates neurons during training to prevent co-adaptation.
*[Early Stopping]: Stop training when validation loss stops improving to prevent overfitting.
*[Batch Normalization]: Normalizes layer inputs to have mean 0 and variance 1, stabilizes training.

<!-- Architecture Concepts -->
*[CNN]: Convolutional Neural Network — architecture using convolutions for spatial data like images.
*[RNN]: Recurrent Neural Network — architecture with loops allowing processing of sequences.
*[LSTM]: Long Short-Term Memory — RNN variant with gates controlling information flow through time.
*[GRU]: Gated Recurrent Unit — simpler variant of LSTM with fewer parameters.
*[Transformer]: Architecture based on self-attention, parallelizable, foundation of modern LLMs.
*[Encoder-Decoder]: Architecture pair where encoder processes input and decoder generates output.
*[Attention]: Mechanism where model learns to focus on relevant parts of input when processing each output.
*[Self-Attention]: Attention mechanism within a single sequence, allowing tokens to attend to all other tokens.
*[Multi-Head Attention]: Multiple attention mechanisms running in parallel, capturing different aspects.

<!-- Embedding & Representation -->
*[Embedding]: Dense numerical vector representing semantic meaning of text or data.
*[Word Embedding]: Vector representation of a word learned during training.
*[Word2Vec]: Technique for learning word embeddings using skip-gram or CBOW models.
*[GloVe]: Global Vectors for Word Representation — embedding method combining global matrix factorization and local context windows.
*[FastText]: Word embedding method using subword information, better for morphologically rich languages.
*[Vector]: High-dimensional numerical array representing data in continuous space.
*[Dimensionality]: Number of dimensions in an embedding vector, typically 50-1000 for word embeddings.

<!-- Optimization & Training -->
*[Convergence]: When optimization algorithm reaches a stable state where loss no longer improves.
*[Vanishing Gradient]: Problem where gradients become exponentially small in deep networks, preventing training.
*[Exploding Gradient]: Problem where gradients become exponentially large, causing unstable training.
*[Gradient Clipping]: Technique limiting gradient magnitude to prevent exploding gradients.
*[Learning Rate Scheduler]: Strategy that adjusts learning rate during training, e.g., exponential decay.
*[Validation Set]: Data used to evaluate model during training, tune hyperparameters.
*[Test Set]: Held-out data used only for final unbiased evaluation.

<!-- Evaluation Metrics -->
*[Accuracy]: Fraction of correct predictions among all predictions.
*[Precision]: Of predicted positives, fraction that were actually correct.
*[Recall]: Of actual positives, fraction that model correctly identified.
*[F1 Score]: Harmonic mean of precision and recall.
*[AUC]: Area Under the Receiver Operating Characteristic Curve, metric for binary classification.
*[Confusion Matrix]: Table showing true positives, false positives, true negatives, false negatives.

<!-- Training Strategies -->
*[Transfer Learning]: Using a pre-trained model as starting point for a new task, saves computation and data.
*[Fine-Tuning]: Adapting a pre-trained model to a new task with task-specific labeled data.
*[Pre-training]: Training a model on a large unlabeled dataset to learn general features.
*[Data Augmentation]: Creating variations of training data to improve generalization.
*[Class Imbalance]: When training data has unequal examples per class, requires special handling.

<!-- Convolution & Pooling -->
*[Convolution]: Operation sliding a learnable filter over input to detect local patterns.
*[Filter]: Learnable kernel used in convolution, learns to detect specific features.
*[Pooling]: Downsampling operation reducing spatial dimensions by taking max or average.
*[Stride]: Step size when sliding convolution kernel, affects output size.
*[Padding]: Adding zeros around input boundary before convolution.

<!-- Sequence Processing -->
*[Sequence]: Ordered list of elements, e.g., words in text or time steps in time series.
*[Hidden State]: Internal state of RNN updated at each time step, carries information across sequence.
*[Context Window]: Maximum length of sequence a model can process at once.
*[Bidirectional]: Processing sequence in both directions to capture full context.

