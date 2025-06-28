import mongoose from 'mongoose';

const ResumeSchema = new mongoose.Schema(
  {
    userId: { 
      type: String,
      required: [true,"You are not registered"] 
    },

    name: {
      first: { 
        type: String, 
        required: true 
      },
      last: { 
        type: String, 
        required: true 
      }
    },

    email: { 
      type: String, 
      required: true, 
    },

    phone: { 
      type: String, 
      required: true 
    },

    yourLocation: { 
      type: String, 
      required: true 
    },

    socials: [
      {
        socialName: { 
          type: String, 
          required: true 
        },
        socialLink: { 
          type: String, 
          required: true 
        }
      }
    ],

    workExperience: [
      {
        companyname: { 
          type: String, 
          required: true 
        },
        duration: { 
          type: String, 
          required: true 
        },
        jobtitle: { 
          type: String, 
          required: true 
        }
      }
    ],

    educationalDetails: [
      {
        degreename: { 
          type: String, 
          required: true 
        },
        course: { 
          type: String, 
          required: true 
        },
        institution: { 
          type: String, 
          required: true 
        },
        yearofcompletion: { 
          type: String, 
          required: true 
        }
      }
    ],

    allSkills: [
      {
        skillname: { 
          type: String, 
          required: true 
        },
        skilllevel: { 
          type: String, 
          required: true 
        }
      }
    ],

    allProjects: [
      {
        projectname: { 
          type: String, 
          required: true 
        },
        projectdescription: { 
          type: String, 
          required: true 
        }
      }
    ],

    softskills: [
      {
        softskillname: { 
          type: String, 
          required: true 
        }
      }
    ],

    description: { 
      type: String, 
      required: true 
    },

    role: { 
      type: String, 
      required: true 
    },
    templatename:{
      type:String,
      required:true,
    }
  },
);

const Resume = mongoose.models.Resume || mongoose.model('Resume', ResumeSchema);

export default Resume;
