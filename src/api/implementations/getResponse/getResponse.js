import GetResponseApi from '../../routes/GetResponse.api'

const getResponse = async ({
  question_pattern,
  callback,
  setLoading
}) => {
  await GetResponseApi.get({ question_pattern })
    .then(
      response => {
        if (response.status === 200){
          if (response.data.length === 0) {
            callback([
              {
                'id': 0,
                'response_text': 'Lo siento! No entiendo la pregunta!'
              }
            ])
          } else {
            callback(response.data)
          }
        }
        setLoading(false)
      }
    )
    .catch(
      err => {
        console.error(err)
        setLoading(false)
      }
    )
}

export default getResponse
