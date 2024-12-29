export const downloadMeme = (meme) => {
    return new Promise((resolve, reject) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const image = new Image();
      
      // Set cross-origin to anonymous to prevent tainted canvas
      image.crossOrigin = "anonymous";
      
      image.onload = () => {
        try {
          // Set canvas size to match image
          canvas.width = image.width;
          canvas.height = image.height;
          
          // Draw background image
          ctx.drawImage(image, 0, 0);
          
          // Style text
          ctx.font = 'bold 50px Impact';
          ctx.fillStyle = 'white';
          ctx.strokeStyle = 'black';
          ctx.lineWidth = 2;
          ctx.textAlign = 'center';
          
          // Add top text
          ctx.fillText(meme.topText, canvas.width/2, 60);
          ctx.strokeText(meme.topText, canvas.width/2, 60);
          
          // Add bottom text
          ctx.fillText(meme.bottomText, canvas.width/2, canvas.height - 20);
          ctx.strokeText(meme.bottomText, canvas.width/2, canvas.height - 20);
          
          // Create download
          const dataUrl = canvas.toDataURL('image/png', 1.0);
          const link = document.createElement('a');
          link.download = `meme-${Date.now()}.png`;
          link.href = dataUrl;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          
          resolve();
        } catch (err) {
          reject(err);
        }
      };
      
      image.onerror = reject;
      image.src = meme.memeImage;
    });
  };