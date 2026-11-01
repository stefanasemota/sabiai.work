import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { ProjectsRepository } from './projects';

describe('ProjectsRepository (Shift-Left Boundary)', () => {
  it('returns all 10 registered ecosystem projects', () => {
    const all = ProjectsRepository.getAllProjects();
    assert.equal(all.length, 10, 'Should contain all 10 ecosystem projects');
  });

  it('filters active projects with live URLs', () => {
    const active = ProjectsRepository.getActiveProjects();
    assert.equal(active.length, 7, 'Should have 7 active projects');
    for (const proj of active) {
      assert.equal(proj.active, true);
      assert.ok(proj.url?.startsWith('https://'), `Active project ${proj.id} must have an https URL`);
    }
  });

  it('groups projects accurately across all 3 ecosystem pods', () => {
    const logicPod = ProjectsRepository.getProjectsByPod('logic-productivity');
    const culturePod = ProjectsRepository.getProjectsByPod('culture-context');
    const communityPod = ProjectsRepository.getProjectsByPod('community-wellness');

    assert.deepEqual(
      logicPod.map((p) => p.id),
      ['vibe-coding-guardrail', 'refine', 'facilitator', 'retro-lite']
    );
    assert.deepEqual(culturePod.map((p) => p.id), ['naijaspeak', 'mile-2-radio', 'our-mumu-don-do']);
    assert.deepEqual(communityPod.map((p) => p.id), ['aqualog', 'kids-cup-helpers', 'g-kicker-coach']);
  });

  it('exposes 3 ecosystem pillar features, developer profile, and 3 support tiers', () => {
    const features = ProjectsRepository.getEcosystemFeatures();
    assert.equal(features.length, 3);

    const devProfile = ProjectsRepository.getDeveloperProfile();
    assert.equal(devProfile.githubUrl, 'https://github.com/stefanasemota');
    assert.equal(devProfile.handle, '@stefanasemota');

    const tiers = ProjectsRepository.getEcosystemTiers();
    assert.equal(tiers.length, 3);
    assert.equal(tiers[1].highlighted, true, 'Middle tier must be highlighted');
  });
});
