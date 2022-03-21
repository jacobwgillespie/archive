class String
  # return character array of string with indices
  def each_char_with_index
    i = 0
    split(//).each do |c|
      yield i, c
      i += 1
    end
  end
end

module Utils
  def self.damerau_levenshtein(str1, str2)
    d = Array.new(str1.size+1){Array.new(str2.size+1)}
    for i in (0..str1.size)
      d[i][0] = i
    end
    for j in (0..str2.size)
      d[0][j] = j
    end
    str1.each_char_with_index do |i,c1|
      str2.each_char_with_index do |j,c2|
        c = (c1 == c2 ? 0 : 1)
        d[i+1][j+1] = [
          d[i][j+1] + 1, #deletion
          d[i+1][j] + 1, #insertion
          d[i][j] + c].min #substitution
        if (i>0) and (j>0) and (str1[i]==str2[j-1]) and (str1[i-1]==str2[j])
          d[i+1][j+1] = [
            d[i+1][j+1],
            d[i-1][j-1] + c].min #transposition
        end
      end
    end
    d[str1.size][str2.size]
  end
end