const { test, trait } = use('Test/Suite')('Project Controller')
const Project = use('App/Models/Project')

trait('Test/ApiClient')

test('create project', async ({ client }) => {
  const response = await client
    .post('/api/project')
    .send({
    project_name: 'Test Project',
    project_description: 'This is a test project',
    project_priority: '2',
    project_start_date: '2022-01-01',
    project_end_date: '2022-01-31',
    project_milestones: 'Kick-Off',
    project_status: 'Open',
    project_type: 'Internal',
    project_progress: '0'
    })
    .end()

    response.assertStatus(200)
    response.assertJSONSubset({
    
    project_name: 'Test Project',
    project_description: 'This is a test project',
    project_priority: '2',
    project_start_date: '2022-01-01',
    project_end_date: '2022-01-31',
    project_milestones: 'Kick-Off',
    project_status: 'Open',
    project_type: 'Internal',
    project_progress: '0'
    })
})

test('get all projects', async ({ client }) => {
  const response = await client.get('/api/projects').end()

  response.assertStatus(200)
  response.assertJSON([])
})

test('get project by id', async ({ client }) => {
  const projectData = {
    project_name: 'Test Project',
    project_description: 'This is a test project',
    project_priority: '2',
    project_start_date: '2022-01-01',
    project_end_date: '2022-01-31',
    project_milestones: 'Kick-Off',
    project_status: 'Open',
    project_type: 'Internal',
    project_progress: '0'
  }

  const project = await Project.create(projectData)

  const response = await client.get(`/api/project/${project.id}`).end()

  response.assertStatus(200)
  response.assertJSONSubset(projectData)
})

test('update project', async ({ client }) => {
  const projectData = {
    project_name: 'Test Project',
    project_description: 'This is a test project',
    project_priority: 'High',
    project_start_date: '2022-01-01',
    project_end_date: '2022-01-31',
    project_type: 'Web Development'
  }

  const project = await Project.create(projectData)

  const updatedProjectData = {
    project_name: 'Updated Test Project',
    project_description: 'This is an updated test project',
    project_priority: 'Low',
    project_start_date: '2022-02-01',
    project_end_date: '2022-02-28',
    project_type: 'Mobile Development'
  }

  const response = await client.put(`/api/update/${project.id}`).send(updatedProjectData).end()

  response.assertStatus(200)
  response.assertJSONSubset(updatedProjectData)

  const updatedProject = await Project.find(project.id)
  updatedProject.merge(updatedProjectData)
  await updatedProject.save()
})

test('delete project', async ({ client }) => {
  const projectData = {
    project_name: 'Test Project',
    project_description: 'This is a test project',
    project_priority: 'High',
    project_start_date: '2022-01-01',
    project_end_date: '2022-01-31',
    project_type: 'Web Development'
  }

  const project = await Project.create(projectData)

  const response = await client.delete(`/api/delete/${project.id}`).end()

  response.assertStatus(200)
  response.assertJSON({ message: 'Project deleted' })

  const deletedProject = await Project.find(project.id)
  response.assertNull(deletedProject)
})