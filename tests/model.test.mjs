import test from 'node:test';import assert from 'node:assert/strict';
import {pool} from '../web/model.mjs';
test('APNIC rates pool raw counts rather than averaging daily percentages',()=>{const p=pool([{date:'2026-01-01',samples:10,positive:10},{date:'2026-01-02',samples:90,positive:0}],30);assert.equal(p.rate,10);assert.equal(p.samples,100);assert.equal(pool([],30).rate,null);});
test('pooling uses calendar window rather than last N available rows',()=>{const p=pool([{date:'2025-01-01',samples:100,positive:0},{date:'2026-01-02',samples:10,positive:10}],7);assert.equal(p.rate,100);assert.equal(p.days,1);});
