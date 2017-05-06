require('dotenv').config();

export default {
  'CURRICULUM_ENABLED': process.env.CURRICULUM_ENABLED,
  'CONTACT_US_ENABLED': process.env.CONTACT_US_ENABLED,
  'VOLUNTEER_PAGE_ENABLED': process.env.VOLUNTEER_PAGE_ENABLED,
  'MISSION_PAGE_ENABLED': process.env.MISSION_PAGE_ENABLED
};
