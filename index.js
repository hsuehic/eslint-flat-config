import defaultConfig from './eslint.config';
import merge from 'merge';

/**
 * Generate a new ESLint configuration based on the basic configuration
 * @param {object} overrideConfig  Linter.Base Optional.
 * @returns {object} ESLint Configuration
 */
export function createESLintConfig(overrideConfig) {
    return merge.recursive(true, defaultConfig, overrideConfig);
}
