export default {
  typescript: true,
  notUseSpecifiers: true,
  filterComponents: files => files.filter(file => /([^d]\.tsx?)$/.test(file)),
};
