import { useState } from "react"
import axios from "axios"
import { AdvancedImage}  from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import {Transformation} from "@cloudinary/url-gen";

// Import required actions.
import {thumbnail, scale} from "@cloudinary/url-gen/actions/resize";
import {byRadius} from "@cloudinary/url-gen/actions/roundCorners";
import {sepia} from "@cloudinary/url-gen/actions/effect";
import {source} from "@cloudinary/url-gen/actions/overlay";
import {opacity,brightness} from "@cloudinary/url-gen/actions/adjust";
import {byAngle} from "@cloudinary/url-gen/actions/rotate"

// Import required qualifiers.
import {image} from "@cloudinary/url-gen/qualifiers/source";
import {Position} from "@cloudinary/url-gen/qualifiers/position";
import {compass} from "@cloudinary/url-gen/qualifiers/gravity";

const UploadImage = () => {
  const [file, setFile] = useState(null);
  // const [files, setFiles] = useState(null);

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'khriztianmoreno'
    }
  });

  // cld.image returns a CloudinaryImage with the configuration set.
  const myImage = cld.image('km_site/profileme');

  // myImage
  //   .resize(thumbnail().width(350).height(350).gravity('face'))
  //   .roundCorners(byRadius(20))    // Round the corners.
  //   .overlay(
  //     source(
  //       image('km_site/Asset_15')
  //         .transformation(new Transformation()
  //           .resize(scale(50)) // Resize the logo.
  //             // .adjust(opacity(60))  // Adjust the opacity of the logo.
  //           // .adjust(brightness(200))
  //         )  // Adjust the brightness of the logo.
  //     )
  //     .position(new Position().gravity(compass('south_east')).offsetX(10).offsetY(5))
  //   )

  const onChangeFile = (e) => {
    setFile(e.target.files[0]);
    // setFiles(e.target.files)
    // console.log("🚀 ~ file: UploadImage.js ~ line 11 ~ onChangeFile ~ e.target.files", e.target.files)
  }

  const onSubmit = async(e) => {
    e.preventDefault()

    const formData = new FormData();
    // for (const myFile of files) {
    //   formData.append('file', myFile);
    // }
    formData.append('file', file);
    const result = await axios.post('http://localhost:8080/api/uploads/file', formData)
  }

  return (
    <div>
      <input
        type="file"
        name="file"
        id="file"
        onChange={onChangeFile}
        accept="image/*"
        multiple
      />
      <button type="submit" onClick={onSubmit}>
        Upload
      </button>

      <div>
        {/* <AdvancedImage cldImg={myImage} /> */}
      </div>
    </div>
  )
}

export default UploadImage;
