import axios from "axios";

const getPlayerAvatar = async (
  seed = Math.random().toString(36).substring(7)
) => {
  try {
    const res = await axios.get(
      `https://api.dicebear.com/6.x/adventurer/svg?seed=${seed}&size=100&clip=false`
    );

    return res.data;
  } catch (error) {
    console.error("Error fetching avatar:", error);
    return "";
  }
};

export { getPlayerAvatar };
