using Microsoft.AspNetCore.Mvc;
using svg.Models;

namespace svg.Services.SVGService
{
  public interface ISVGService
  {
    SVG GetSVG();
    SVG UpdateSVG(SVG svg);
  }
}
