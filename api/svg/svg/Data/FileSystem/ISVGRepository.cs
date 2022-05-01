using svg.Models;

namespace svg.Data.FileSystem
{
  public interface ISVGRepository
  {
    public SVG Get();
    public SVG Update(SVG svg);
  }
}
