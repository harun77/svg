using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using svg.Models;
using svg.Services.SVGService;

namespace svg.Controllers
{
  [Route("api/svg")]
  public class SVGController : Controller
  {
    private readonly ISVGService sVGService;

    public SVGController(ISVGService _sVGService)
    {
      this.sVGService = _sVGService;
    }

    [HttpGet]
    public IActionResult Get()
    {
      return Ok(sVGService.GetSVG());
    }

    [HttpPost]
    public IActionResult Update(SVG svg)
    {
      return Ok(sVGService.UpdateSVG(svg));
    }
  }
}
