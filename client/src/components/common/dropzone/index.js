import React, { useRef, useState, useEffect } from 'react';
import './dropZone.styles.scss';

const Dropzone = () => {
  return (
    <div className="drop-container">
      <div className="drop-container__content">
        <div className="drop-container__content__message">
          <div className="drop-container__content__upload-icon"></div>
          Drag & Drop files here or click to upload
        </div>
      </div>
    </div>
  );
};

export default Dropzone;
