using InternsAPI.Models;
using InternsAPI.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InternsAPI.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class InternsController : ControllerBase
    {
        IInternCollectionService _internCollectionService;
        public InternsController(IInternCollectionService internCollectionService)
        {
            _internCollectionService = internCollectionService ?? throw new ArgumentNullException(nameof(internCollectionService));
        }

        /// <summary>
        /// Get all interns.
        /// </summary>
        [HttpGet]
        public async Task<IActionResult> GetInterns()
        {
            return Ok(await _internCollectionService.GetAll());
        }

        /// <summary>
        /// Get one intern by InternId.
        /// </summary>
        /// <response code="200">Success getting one intern from the list.</response>
        /// <response code="404">Getting the intern failed because of invalid id.</response>
        /// <returns>Returns one intern from the list</returns>
        [HttpGet("intern/{internId}", Name = "GetInternById")]
        public async Task<IActionResult> GetInternById(string internId)
        {
            var intern = await _internCollectionService.Get(internId);
            if (intern == null)
            {
                return NotFound($"Intern with id {internId} not found");
            }
            return Ok(intern);
        }

        /// <summary>
        /// Add a new intern.
        /// </summary>
        /// <response code="200">Success creating one intern.</response>
        /// <response code="201">Success getting location header in post response.</response>
        [HttpPost]
        public async Task<IActionResult> CreateNote([FromBody] Intern intern)
        {
            if (string.IsNullOrEmpty(intern.Id))
            {
                intern.Id = Guid.NewGuid().ToString();
            }
            if (intern == null)
            {
                return BadRequest("Intern is null");
            }
            await _internCollectionService.Create(intern);

            return CreatedAtRoute("GetInternById", new { internId = intern.Id }, intern);

        }

        /// <summary>
        /// Update intern by InternId.
        /// </summary>
        /// <response code="200">Success updating intern.</response>
        /// <response code="404">Updating the intern failed because of invalid id.</response>
        /// <returns>Updated intern</returns>
        [HttpPut]
        public async Task<IActionResult> UpdateInternById([FromBody] Intern intern)
        {
            if (intern == null)
            {
                return NotFound("Please provide intern body");
            }
            await _internCollectionService.Update(intern.Id, intern);

            return Ok(intern);
        }

        /// <summary>
        /// Delete intern by InternId.
        /// </summary>
        /// <response code="200">Success deleting intern.</response>
        /// <response code="404">Deleting the intern failed because of invalid id.</response>
        /// <returns>Ok. The intern was deleted</returns>
        [HttpDelete("intern/{id}")]
        public async Task<IActionResult> DeleteIntern(string id)
        {
            bool ok = await _internCollectionService.Delete(id);
            if (!ok)
            {
                return NotFound("Intern not found");
            }
            return Ok("Intern was deleted");
        }
    }
}
