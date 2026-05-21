#!/usr/bin/env python3
import os, json, re, sys

docs_dir = sys.argv[1]
output_file = sys.argv[2]
sections = []

if os.path.isdir(docs_dir):
    for d in sorted(os.listdir(docs_dir)):
        dpath = os.path.join(docs_dir, d)
        if not os.path.isdir(dpath):
            continue
        section_name = re.sub(r'^\d+-', '', d)
        files = []
        for f in sorted(os.listdir(dpath)):
            if not f.endswith('.md'):
                continue
            with open(os.path.join(dpath, f), 'r') as fh:
                content = fh.read()
            title = re.sub(r'^\d+-', '', f).replace('.md', '').replace('-', ' ').title()
            files.append({'filename': f, 'title': title, 'content': content})
        if files:
            sections.append({'id': d, 'name': section_name, 'docs': files})

with open(output_file, 'w') as out:
    out.write('export default ')
    out.write(json.dumps(sections, indent=2))
    out.write(';\n')

total = sum(len(s['docs']) for s in sections)
print(f'   Found {len(sections)} section(s), {total} document(s)')
