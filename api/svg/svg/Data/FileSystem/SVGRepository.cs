using svg.Models;
using Newtonsoft.Json;

namespace svg.Data.FileSystem
{
  public class SVGRepository : ISVGRepository
  {
    string dataPath = "../../../data/svg.json";

    public SVG Get()
    {
      string svgJson = File.ReadAllText(dataPath);
      SVG model = JsonConvert.DeserializeObject<SVG>(svgJson);
      return model;
    }

    public SVG Update(SVG svg)
    {
      SVG model = Get();
      model.Width = svg.Width;
      model.Height = svg.Height;
      return model;
    }
  }
}
