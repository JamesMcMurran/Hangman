/**
 * @author james
 */
/**


/**
 * This is to draw the background 
 * @param {Object} top1 top half start color
 * @param {Object} top2 top half end color
 * @param {Object} bottom1 bottom half start color
 * @param {Object} bottom2 bottom half end color
 */
drawBackground = function  (top1,top2,bottom1,bottom2) {
  canvasContext.beginPath();
                
                canvasContext.rect(0,0,600,400);
                var bgc1 = canvasContext.createLinearGradient(300, 0, 300, 400);
                bgc1.addColorStop(0, top1);
                bgc1.addColorStop(1, top2);
                canvasContext.fillStyle = bgc1;
                canvasContext.fill();
                canvasContext.beginPath();
                
                canvasContext.rect(0,300,600,400);
                var bgc2 = canvasContext.createLinearGradient(300, 400, 300, 800);
                bgc2.addColorStop(0, bottom1);
                bgc2.addColorStop(1, bottom2);
                canvasContext.fillStyle = bgc2;
                canvasContext.fill();
}
