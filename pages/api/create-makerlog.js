const handler = (req, res) => {
  if (req === 'POST') {
    console.log('req:::', req);
    const email = req.body.email;
    const feedbackText = req.body.text;

    const newFeedback = {
      id: new Date().toISOString(),
      email: email,
      feedback: feedbackText,
    };

    const data = JSON.parse();
  }
  res.status(200).json({ message: 'this works!' });
};

export default handler;
