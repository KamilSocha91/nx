export { Tree, FileChange } from '@nrwl/tao/src/shared/tree';
export {
  WorkspaceConfiguration,
  TargetConfiguration,
  ProjectConfiguration,
  Generator,
  GeneratorCallback,
} from '@nrwl/tao/src/shared/workspace';
export {
  NxJsonConfiguration,
  NxJsonProjectConfiguration,
} from '@nrwl/tao/src/shared/nx';
export { logger } from '@nrwl/tao/src/shared/logger';
export { TargetContext } from '@nrwl/tao/src/commands/run';

export { formatFiles } from './src/generators/format-files';
export { generateFiles } from './src/generators/generate-files';
export {
  addProjectConfiguration,
  readProjectConfiguration,
  updateProjectConfiguration,
} from './src/generators/project-configuration';

export { readJson, writeJson, updateJson } from './src/utils/json';
export { addDependenciesToPackageJson } from './src/utils/package-json';
export { installPackagesTask } from './src/tasks/install-packages-task';
export { names } from './src/utils/names';
export { getWorkspaceLayout } from './src/utils/get-workspace-layout';
export {
  applyChangesToString,
  ChangeType,
  StringChange,
  StringDeletion,
  StringInsertion,
} from './src/utils/string-change';
export { offsetFromRoot } from './src/utils/offset-from-root';
export { convertNxGenerator } from './src/utils/invoke-nx-generator';
