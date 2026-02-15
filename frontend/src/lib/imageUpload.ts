import axios from "axios";

export const imageUpload = async (imageFile: File): Promise<string | undefined> => {
  const formData = new FormData();
  formData.append("image", imageFile);

  try {
    const imageApiUrl = process.env.NEXT_PUBLIC_IMAGE_UPLOAD_URL as string;

    const response = await axios.post(imageApiUrl, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    return response.data?.data?.display_url;
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error("Image upload error:", err.message);
    } else {
      console.error("Unexpected error:", err);
    }
    return undefined;
  }
};
