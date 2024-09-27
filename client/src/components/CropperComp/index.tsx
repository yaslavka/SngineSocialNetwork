import React, { createRef } from 'react';
import 'cropperjs/dist/cropper.css';
import Cropper, { ReactCropperElement } from 'react-cropper';

interface CropperCompProps {
  image: string;
  setCropData: (data: string) => void;
}

const CropperComp: React.FC<CropperCompProps> = ({ image, setCropData }) => {
  const cropperRef = createRef<ReactCropperElement>();
  const onCrop = () => {
    const cropper = cropperRef.current?.cropper;
    setCropData(cropper.getCroppedCanvas().toDataURL());
  };

  return (
    <Cropper
      src={image}
      style={{ width: '100%' }}
      initialAspectRatio={16 / 4}
      guides={false}
      ref={cropperRef}
      dragMode='move'
      crop={onCrop}
      aspectRatio={1}
      rotatable={true}
      responsive={true}
      checkOrientation={true}
    />
  );
};

export default CropperComp;
