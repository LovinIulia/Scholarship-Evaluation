using InternsAPI.Models;
using InternsAPI.Settings;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InternsAPI.Services
{
    public class InternCollectionService : IInternCollectionService
    {
        private readonly IMongoCollection<Intern> _interns;

        public InternCollectionService(IMongoDBSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _interns = database.GetCollection<Intern>(settings.InternCollectionName);
        }

        public async Task<List<Intern>> GetAll()
        {
            var result = await _interns.FindAsync(intern => true);
            return result.ToList();
        }

        public async Task<Intern> Get(string internId)
        {
            return (await _interns.FindAsync(intern => intern.Id == internId)).FirstOrDefault();
        }

        public async Task<bool> Create(Intern intern)
        {
            if (string.IsNullOrEmpty(intern.Id))
            {
                intern.Id = Guid.NewGuid().ToString();
            }
            await _interns.InsertOneAsync(intern);
            return true;
        }
        public async Task<bool> Update(string id, Intern intern)
        {
            intern.Id = id;
            var result = await _interns.ReplaceOneAsync(intern => intern.Id == id, intern);
            if (!result.IsAcknowledged && result.ModifiedCount == 0)
            {
                await _interns.InsertOneAsync(intern);
                return false;
            }
            return true;
        }

        public async Task<bool> Delete(string id)
        {
            var result = await _interns.DeleteOneAsync(intern => intern.Id == id);
            if (result.IsAcknowledged && result.DeletedCount == 0)
            {
                return false;
            }
            return true;

        }
    }
}
