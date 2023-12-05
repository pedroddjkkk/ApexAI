'use client'
import axios from "axios";
import { useState } from "react";

/**
 * # MY ACCOUNT GOOGLE PLAY:
 */

export default function PrivatePage(props: any) {
  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);

  const uploadToClient = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i) as any);
    }
  };

  const uploadToServer = async (event: any) => {
    const body = new FormData();
    body.append("file", image as any);
    const response = await axios.post("/api/file",
      body
    );
    console.log(response);

  };

  return (
    <div className="">
      <div>
        <img src={createObjectURL as any} />
        <h4>Select Image</h4>
        <input type="file" name="myImage" onChange={uploadToClient} />
        <button
          className="btn btn-primary"
          type="submit"
          onClick={uploadToServer}
        >
          Send to server
        </button>
      </div>
    </div>
  );
}
