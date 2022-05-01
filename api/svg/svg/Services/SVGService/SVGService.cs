using svg.Data.FileSystem;
using svg.Models;

namespace svg.Services.SVGService
{
  public class SVGService : ISVGService
  {

    ISVGRepository sVGRepository;
    public SVGService(ISVGRepository _sVGRepository)
    {
      sVGRepository = _sVGRepository;
    }
    public SVG GetSVG()
    {
      return sVGRepository.Get();
    }

    public SVG UpdateSVG(SVG svg)
    {
      return sVGRepository.Update(svg);
    }
  }
}
