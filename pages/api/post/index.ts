import createHandler from 'lib/mongoose/createHandler';
import Post from 'models/Post';

const handler = createHandler();

// get post
handler.get(async (req, res) => {
  try {
    const result = await Post.find({});

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({
      error: error.toString(),
    });
  }
});

// set post
handler.post(async (req, res) => {
  try {
    const post = new Post(req.body);
    const result = await post.save();

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({
      error: error.toString(),
    });
  }
});

// delete post
handler.delete(async (req, res) => {
  try {
    await Post.deleteMany({});

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({
      error: error.toString(),
    });
  }
});

export default handler;
