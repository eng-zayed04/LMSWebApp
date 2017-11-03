using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Security.AccessControl;
using System.Web;

namespace LBL_ServerApp.Models
{
    public class LmsDbContext : DbContext
    {
        public LmsDbContext():base("DefaultConnection")
        {
            
        }

        public DbSet<Student> Students { get; set; }
    }
}