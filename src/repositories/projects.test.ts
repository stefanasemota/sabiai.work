import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { ProjectsRepository } from './projects';

describe('ProjectsRepository (Shift-Left Boundary)', () => {
  it('returns all registered ecosystem projects', () => {
    const all = ProjectsRepository.getAllProjects();
    assert.ok(all.length >= 6, 'Should contain at least 6 ecosystem projects');
  });

  it('filters active projects with live URLs', () => {
    const active = ProjectsRepository.getActiveProjects();
    assert.ok(active.length >= 3, 'Should have active projects');
    for (const proj of active) {
      assert.equal(proj.active, true);
      assert.ok(proj.url?.startsWith('https://'), `Active project ${proj.id} must have an https URL`);
    }
  });

  it('filters projects by pod category', () => {
    const culturePod = ProjectsRepository.getProjectsByPod('culture-context');
    const ids = culturePod.map((p) => p.id);
    assert.ok(ids.includes('naijaspeak'));
    assert.ok(ids.includes('mile-2-radio'));
    assert.ok(ids.includes('our-mumu-don-do'));
  });
});
